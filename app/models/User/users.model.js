import pool from "../../../configs/database/database.js";
import { generateId, hashString } from "../../ultils/crypto.js";

class Users {
  constructor(data) {
    this.user_id = data.user_id;
    this.user_name = data.user_name;
    this.user_email = data.user_email;
    this.user_password = data.user_password;
    this.user_status = data.user_status || 1;
    this.type_account = data.type_account;
    this.created_at = data.created_at || Date.now();
    this.user_role = data.user_role || 0;
  }

  async create() {
    try {
      const user_id = this.user_id ?? generateId("uid_");
      const createUserQuery =
        "INSERT INTO users (user_id, user_name, user_email, user_password, user_status, user_role, type_account) VALUES (?, ?, ?, ?, ?, ?, ?);";
      const [result] = await pool.execute(createUserQuery, [
        user_id,
        this.user_name,
        this.user_email,
        this.user_password,
        this.user_status,
        this.user_role,
        this.type_account || "register",
      ]);
      return result.affectedRows ? user_id : null;
    } catch (error) {
      console.error("Database error:", error); // Ghi log lỗi để dễ debug
      return false;
    }
  }

  // tìm người dùng
  static async login(user_email, user_password) {
    console.log("vào");
    try {
      const findUserQuery =
        "SELECT * FROM users WHERE user_email = ? and user_password = ?;";
      const [rows] = await pool.execute(findUserQuery, [
        user_email,
        user_password,
      ]);
      console.log(rows[0]);

      return rows.length > 0 ? rows[0] : null; // Trả về thông tin người dùng nếu tìm thấy
    } catch (error) {
      console.error("Database error:", error);
      return null;
    }
  }

  // tìm người dùng theo id
  static async getById(user_id) {
    try {
      const getUserByIdQuery =
        "SELECT user_id, user_name, user_email, user_status, created_at, user_role, type_account  FROM users  WHERE user_id = ?";
      const [result] = await pool.execute(getUserByIdQuery, [user_id]);
      return result[0];
    } catch (error) {
      console.log(error.message);
      return error;
    }
  }
  static async findUserById(id_user) {
    try {
      const findUserQuery = "SELECT * FROM users WHERE user_id = ?";
      const [rows] = await pool.execute(findUserQuery, [id_user]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error("Database error:", error);
      return null;
    }
  }
  static async getAllUser(user_id) {
    try {
      const findUserQuery = "SELECT * FROM users WHERE user_id != ?";
      const [rows] = await pool.execute(findUserQuery, [user_id]);
      return rows.length > 0 ? rows : null;
    } catch (error) {
      console.error("Database error:", error);
      return null;
    }
  }

  // check email address
  static async checkEmailExists(email) {
    try {
      const checkEmailQuery =
        "SELECT COUNT(*) as count FROM users WHERE user_email = ?;";
      const [rows] = await pool.execute(checkEmailQuery, [email]);
      return rows[0].count > 0;
    } catch (error) {
      console.error("Database error:", error);
      throw error;
    }
  }
  // kết bạn
  static async addFriendById(id_user, friend_id) {
    try {
      // console.log(id_user, friend_id);
      const add_friend =
        "insert into friend(requestor_id, receiver_id, relationship_status) values(?, ?, ?)";
      const [rows] = await pool.execute(add_friend, [id_user, friend_id, 0]);
      return rows.affectedRows;
    } catch (error) {
      console.error("Database error:", error);
      throw error;
    }
  }
  // chấp nhận lời mời
  static async AcceptFriendById(id_user, friend_id) {
    try {
      // console.log(id_user, friend_id);
      const add_friend =
        "update friend set relationship_status = 1 where requestor_id = ? and receiver_id = ?";
      const [rows] = await pool.execute(add_friend, [id_user, friend_id, 0]);
      return rows.affectedRows;
    } catch (error) {
      console.error("Database error:", error);
      throw error;
    }
  }

  // Danh sách người gửi kết bạn đến mình
  static async ListInviting(id_user) {
    try {
      const list_inviting = `
      SELECT u.user_id, u.user_name, pm.media_link AS avatar
      FROM friend f
      JOIN users u ON f.requestor_id = u.user_id
      LEFT JOIN ProfileMedia pm ON pm.user_id = u.user_id AND pm.media_type = 'avatar'
      WHERE f.receiver_id = ?
    `;
      const [rows] = await pool.execute(list_inviting, [id_user]);
      console.log("Danh sách gửi lời mời: ", rows);
      return rows.length > 0 ? rows : null;
    } catch (error) {
      console.error("Database error:", error);
      throw error;
    }
  }
}

export { Users };