import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";
import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
	destination(req: Request, file: Express.Multer.File, cb: DestinationCallback) {
		cb(null, PATH_STORAGE);
	},
	filename(req: Request, file: Express.Multer.File, cb: FileNameCallback) {
		const ext = file.originalname.split(".").pop();
		const fileNameRandom = `image-${Date.now()}.${ext}`;
		cb(null, fileNameRandom);
	},
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
	const fileTypes = /jpeg|jpg|png|gif/;
	const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = fileTypes.test(file.mimetype);

	if (mimetype && extname) {
		cb(null, true);
	}
	cb(null, false);
};

export const multerMiddleware = multer({ storage, fileFilter });
