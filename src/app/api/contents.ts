import type { NextApiRequest, NextApiResponse } from "next";
const { cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../../../firebase-test-serviceAccount.json"); // 秘密鍵を取得
const admin = require("firebase-admin");


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const COLLECTION_NAME = "contents";
	console.log("serviceAccount", serviceAccount);
	//　初期化する
	if (admin.apps.length === 0) {
		admin.initializeApp({
			credential: cert(serviceAccount),
		});
	}
	const db = getFirestore();

	if (req.method === "POST") {
		console.log("post");
		const docRef = db.collection(COLLECTION_NAME).doc();
		const insertData = {
			content: "hello world",
		};
		docRef.set(insertData);
	}
	res.status(200);
}
