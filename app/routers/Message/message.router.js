import multer from "multer";
import {
  checkExistKeyPair,
  checkSecretDeCryptoPrivateKey,
  createKeyPair,
  createMessage,
  deleteKeysPair,
  getAllMessages,
} from "../../controllers/Message/message.controller.js";
import Authentication from "../../middleware/authentication.js";
import { Authorization } from "../../middleware/authorization_token.js";
import express, { Router } from "express";
const storage = multer.memoryStorage(); // Bạn có thể thay đổi sang multer.diskStorage() nếu cần
const upload = multer({ storage });
export default function MessageRouter(router = Router()) {
  router.post(
    "/send-message/:id",
    upload.array("file", 10),
    Authentication,
    Authorization,
    createMessage
  );
  router.post(
    "/all-messages/:id",
    Authentication,
    Authorization,
    getAllMessages
  );




  
  // kiểm tra tồn tại cặp khoá
  router.get(
    "/check-exists-keypair",
    Authentication,
    Authorization,
    checkExistKeyPair
  );
  // tạo cặp khoá
  router.post("/create-keypair", Authentication, Authorization, createKeyPair);

  // lấy khoá bí mật
  router.post(
    "/post-decode-private-key",
    Authentication,
    Authorization,
    checkSecretDeCryptoPrivateKey
  );
  // Xoá cặp khoá
  router.delete(
    "/delete_keys_pair",
    Authentication,
    Authorization,
    deleteKeysPair
  );
  return router;
}