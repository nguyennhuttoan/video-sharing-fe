import { Button } from "antd";
import User from "../../types/user.type";

const UserBar = ({ email }: Partial<User>) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "0 20px",
      }}
    >
      <div>
        Welcome <b>{email}</b>{" "}
      </div>
      <Button>Share</Button>
    </div>
  );
};

export default UserBar;
