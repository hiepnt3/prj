<template>
  <div class="loginContent">
    <div class="container container-v2">
      <div class="row d-flex justify-content-between">
        <div class="col-lg-5 form_content--login">
          <h1 class="login_title text-center">LOGIN</h1>
          <form class="login_form">
            <div class="form-group row">
              <label
                for="Email"
                class="col-sm-3 col-form-label form_group--label"
                >Email address</label
              >
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control form_group--input"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Password"
                class="col-sm-3 col-form-label form_group--label"
                >Password</label
              >
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control form_group--input"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div class="text-center mt-5 form_content--btn">
              <button class="btn-main btn-dark" value="Log in">Log in</button>
            </div>
          </form>
          <div class="forgot_pass_form mt-4 d-flex justify-content-center">
            <div class="forgot_pass--left">
              <a href="#!">Return to Store</a>
            </div>
            <div class="forgot_pass--right">
              <a href="#!">Forgot your password?</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 form_content--register">
          <h1 class="login_title text-center">Register</h1>
          <form class="login_form">
            <div class="form-group row">
              <label
                for="name"
                class="col-sm-3 col-form-label form_group--label"
                >First Name</label
              >
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control form_group--input"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Email"
                class="col-sm-3 col-form-label form_group--label"
                >Last Name</label
              >
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control form_group--input"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Email"
                class="col-sm-3 col-form-label form_group--label"
                >Address</label
              >
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control form_group--input"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Email"
                class="col-sm-3 col-form-label form_group--label"
                >Email
              </label>
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control form_group--input"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Password"
                class="col-sm-3 col-form-label form_group--label"
                >Password</label
              >
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control form_group--input"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="Password"
                class="col-sm-3 col-form-label form_group--label"
                >Password</label
              >
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control form_group--input"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <div class="text-center mt-5 form_content--btn">
              <button class="btn-main btn-dark" value="Log in">Register</button>
            </div>
          </form>
          <div class="forgot_pass_form mt-4 d-flex justify-content-center">
            <div class="forgot_pass--left">
              <a href="#!">Return to Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginContent",
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/mixin";
@import "../../../assets/scss/variables";
.login {
  a {
    text-decoration: none;
    color: black;
  }
  padding: 250px 0 100px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "roboto", sans-serif;
  .form_content--login,
  .form_content--register {
    .login_title {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      padding-bottom: 50px;
      letter-spacing: 1.5px;
    }
    .form-group {
      margin-bottom: 1rem;
      .form_group--label {
        font-size: 16px;
        font-weight: 500;
      }
      .form_group--input {
        border: none;
        border-bottom: 1px solid #ccc;
        border-radius: 0;
      }
    }
    .form_content--btn {
      .btn-main {
        border-radius: 0;
        padding: 12px 40px;
        background-color: #111111;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        overflow: hidden;
        border: none;
        letter-spacing: 0.2em;
        font-size: 14px;
        border: 1px solid black;
        transition: 0.3s all ease;

        &:hover {
          transition: 0.3s all ease;
          background-color: #fff;
          color: $mainColor;
          border: 1px solid $mainColor;
        }
      }
    }
    .forgot_pass_form {
      a {
        font-size: 14px;
        transition: 0.3s all ease;
        &:hover {
          transition: 0.3s all ease;
          color: $mainColor;
        }
      }
      .forgot_pass--left {
        padding-right: 15px;
      }
    }
  }
}
</style>