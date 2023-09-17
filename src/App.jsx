import React, { useEffect, useState } from "react";
import CustomRoutes from "./router/CustomRoutes";
import { getUser } from "./api/UserService";
import { useAppDispatch } from "./store/Hooks";
import { loginFailed, loginSuccess } from "./store/slices/AuthSlice";
import Loading from "./components/common/loading/Loading";
import { encryptedLocalStorage } from "./helpers/functions/EncryptStorage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const loadData = async () => {
    try {
      const token = encryptedLocalStorage.getItem("token");
      if (token) {
        const resp = await getUser();
        dispatch(loginSuccess(resp.data));
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailed());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return <>{loading ? <Loading /> : <CustomRoutes />}</>;
}

export default App;
