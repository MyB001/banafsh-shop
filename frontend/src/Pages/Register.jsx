import React, { useContext } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "../Validators/Rules";
import { useForm } from "../Hooks/useForm";
import { AuthContext } from "../Context/AuthContext";

export default function Register() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext)

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      user_name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirm_password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerForm = (event) => {
    event.preventDefault()
    
    const newUserInfos = {
      name: formState.inputs.name.value,
      username: formState.inputs.user_name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.confirm_password.value 
    }

    fetch('http://localhost:4000/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserInfos)
    })
    .then(res => res.json())
    .then(result => {
      authContext.login(result.user, result.accessToken)
    })
  };

  return (
    <div
      className="z-20 fixed top-0 left-0 h-screen w-screen transition-all bg-no-repeat bg-left"
      style={{ backgroundImage: "url(/images/bgImg.jpg)" }}
    >
      <div
        className="w-4/5 sm:w-3/5 lg:w-1/3 p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[1px] border-[#FF00FF] rounded-lg flex flex-col gap-4"
        id="phone-number__page"
      >
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MdOutlineArrowForwardIos />
          <h1 className="text-black font-bold">بازگشت</h1>
        </div>

        <hr />

        <p className="text-black text-[16px] font-light text-center">
          برای ثبت نام اطلاعات خود را وارد کنید.
        </p>

        <form action="" onSubmit={registerForm}>
          <div className="flex flex-col gap-2">
            <Input
              element="input"
              type="text"
              id="name"
              placeholder="نام و نام خانوادگی"
              className={`w-full outline-none border-[1px] border-solid rounded-md p-2 text-center`}
              validation={[
                requiredValidator(),
                minValidator(3),
                maxValidator(20),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              element="input"
              type="text"
              id="user_name"
              placeholder="نام کاربری"
              className={`w-full outline-none border-[1px] border-solid rounded-md p-2 text-center`}
              validation={[
                requiredValidator(),
                minValidator(3),
                maxValidator(24),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              element="input"
              type="text"
              id="email"
              placeholder="پست الکترونیکی (ایمیل)"
              className={`w-full outline-none border-[1px] border-solid rounded-md p-2 text-center`}
              validation={[
                requiredValidator(),
                minValidator(8),
                maxValidator(24),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              element="input"
              type="password"
              id="password"
              placeholder="رمز عبور"
              className={`w-full outline-none border-[1px] border-solid rounded-md p-2 text-center`}
              validation={[
                requiredValidator(),
                minValidator(8),
                maxValidator(18),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              element="input"
              type="password"
              id="confirm_password"
              placeholder="تکرار رمز عبور"
              className={`w-full outline-none border-[1px] border-solid rounded-md p-2 text-center`}
              validation={[
                requiredValidator(),
                minValidator(8),
                maxValidator(18),
              ]}
              onInputHandler={onInputHandler}
            />
            <p
              id="phone-number-valid"
              className="text-red-500 text-sm font-normal"
            ></p>
          </div>

          <button
            type="submit"
            id="phone-number-btn"
            className={`${
              formState.isFormValid
                ? "bg-[#FF00FF] border-[#FF00FF] active:text-[#FF00FF] active:bg-white active:scale-95"
                : "border-[#ff00ff79] bg-[#ff00ff79]"
            } w-full text-white border-[1px] border-solid p-2 rounded-md transition-all duration-500`}
            disabled={!formState.isFormValid}
          >
            ورود / ثبت نام
          </button>
        </form>
      </div>

      <div
        className="hidden w-4/5 sm:w-3/5 lg:w-2/5 h-2/5 p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg flex-col gap-3"
        id="sign-in-code__page"
      >
        <div className="flex self-start" id="code-back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <h1 className="text-black font-bold cursor-pointer">بازگشت</h1>
        </div>

        <hr />

        <p className="text-black text-[16px] font-light text-center">
          کد ارسال شده به شماره زیر را وارد کنید.
        </p>

        <div className="flex justify-around">
          <p id="user-number"></p>
          <p
            id="change-number"
            className="text-[#FF00FF] text-sm font-semibold cursor-pointer"
          >
            تغییر شماره
          </p>
        </div>

        <input
          type="text"
          id="user-code"
          className="w-full outline-none border-[1px] border-solid border-[#FF00FF] rounded-md p-2 text-center text-black"
        />

        <p
          id="code-timer-parent"
          className="text-black text-sm font-light text-center hidden"
        >
          ارسال مجدد کد بعد از <span id="code-timer" className="text-sm"></span>{" "}
          دقیقه
        </p>
        <p
          id="recode"
          className="text-[#FF00FF] text-sm font-semibold text-center cursor-pointer hidden"
        >
          ارسال مجدد کد
        </p>

        <button
          type="button"
          value="user-code-btn"
          disabled
          id="user-code-btn"
          className="w-full text-white bg-[#FF00FF] border-[1px] border-solid border-[#FF00FF]  p-2 rounded-md transition-all disabled:opacity-60 enabled:active:text-[#FF00FF] enabled:active:bg-white enabled:active:scale-95"
        >
          تایید
        </button>
      </div>
    </div>
  );
}
