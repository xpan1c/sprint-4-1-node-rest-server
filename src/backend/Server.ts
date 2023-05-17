import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response, Router } from "express";
import helmet from "helmet";

import { HttpResponse } from "../shared/infrastructure/response/HttpResponse";
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
		registerRoutes(router);
		router.use((err: Error, req: Request, res: Response, _next: () => void) => {
			// eslint-disable-next-line no-console
			console.log(err);
			new HttpResponse().Error(res, err.message);
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
