import { json, urlencoded } from "body-parser";
import cors from "cors";
import errorHandler from "errorhandler";
import express, { Request, Response, Router } from "express";
import helmet from "helmet";

import { HttpStatus } from "../shared/domain/HttpStatus";
import { registerRoutes } from "./routes";

export class Server {
	private readonly express: express.Express;
	private readonly port: string;

	constructor(port: string) {
		this.port = port;
		this.express = express();
		this.express.use(helmet());
		this.express.use(cors());
		this.express.use(json());
		this.express.use(urlencoded({ extended: true }));
		const router = Router();
		this.express.use(router);
		router.use(errorHandler());
		registerRoutes(router);
		router.use((err: Error, req: Request, res: Response, _next: () => void) => {
			console.log(err);
			res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
		});
	}

	async listen(): Promise<void> {
		await new Promise<void>((resolve) => {
			this.express.listen(this.port, () => {
				// eslint-disable-next-line no-console
				console.log(
					`✅ Backend App is running at http://localhost:${this.port} in ${this.express.get(
						"env"
					)} mode`
				);
				// eslint-disable-next-line no-console
				console.log("✋ Press CTRL-C to stop\n");

				resolve();
			});
		});
	}
}
