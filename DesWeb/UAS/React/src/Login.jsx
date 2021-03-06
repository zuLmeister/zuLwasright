import "./logreg.css";
import { useEffect } from "react";
import $ from "jquery";

function Login() {
  useEffect(() => {
    $(document).ready(function () {
      $(".login-info-box").fadeOut();
      $(".login-show").addClass("show-log-panel");
    });

    $('.login-reg-panel input[type="radio"]').on("change", function () {
      if ($("#log-login-show").is(":checked")) {
        $(".register-info-box").fadeOut();
        $(".login-info-box").fadeIn();

        $(".white-panel").addClass("right-log");
        $(".register-show").addClass("show-log-panel");
        $(".login-show").removeClass("show-log-panel");
      } else if ($("#log-reg-show").is(":checked")) {
        $(".register-info-box").fadeIn();
        $(".login-info-box").fadeOut();

        $(".white-panel").removeClass("right-log");

        $(".login-show").addClass("show-log-panel");
        $(".register-show").removeClass("show-log-panel");
      }
    });
  }, []);
  return (
    <div className="BadanLogin">
      <div className="login-reg-panel">
        <div className="login-info-box">
          <h2>Sudah Punya Akun ?</h2>
          <label id="label-register" for="log-reg-show">
            Login
          </label>
          <input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
        </div>

        <div className="register-info-box">
          <h2>Tidak Punya Akun ?</h2>
          <label id="label-login" for="log-login-show">
            Register
          </label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>

        <div className="white-panel">
          <div className="login-show">
            <h2>LOGIN</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="button" value="Login" />
            <a href="">Forgot password?</a>
          </div>
          <div className="register-show">
            <h2>REGISTER</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="button" value="Register" />
          </div>
        </div>
      </div>

      <script src="logreg.js"></script>
    </div>
  );
}
export default Login;
