import React from "react";

export default function EditProfile() {
  return (
    <div className="col-span-3 m-2">
      <p className="p-2 font-bold">اطلاعات کاربری</p>
      <form
        action=""
        class="m-2 p-4 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex flex-col gap-2 bg-white"
      >
        <div class="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-center">
          <div class="">
            <label for="first-name" class="text-sm text-black">
              نام<span class="text-red-500">*</span>
            </label>
            <input
              id="first-name"
              type="text"
              required
              maxlength="11"
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <div class="">
            <label for="last-name" class="text-sm text-black">
              نام خانوادگی<span class="text-red-500">*</span>
            </label>
            <input
              id="last-name"
              type="text"
              required
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <div class="">
            <label for="user-name" class="text-sm text-black">
              نام نمایشی<span class="text-red-500">*</span>
            </label>
            <input
              id="user-name"
              type="text"
              required
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <div class="">
            <label for="number" class="text-sm text-black">
              شماره تلفن همراه<span class="text-red-500">*</span>
            </label>
            <input
              id="number"
              type="text"
              required
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
        </div>

        <hr />

        <div class="border-2 border-[#FF00FF] rounded-md p-8 mt-4 relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-center">
          <div class="">
            <label for="old-password" class="text-sm text-black">
              گذر واژه قبلی
            </label>
            <input
              id="old-password"
              type="password"
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <div class="">
            <label for="new-password" class="text-sm text-black">
              گذر واژه جدید
            </label>
            <input
              id="new-password"
              type="password"
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <div class="">
            <label for="repeat-new-password" class="text-sm text-black">
              تکرار گذر واژه جدید
            </label>
            <input
              id="repeat-new-password"
              type="password"
              class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
            />
          </div>
          <p class="absolute -top-4 right-4 bg-white px-2 text-black font-semibold">
            تغییر گذر واژه
          </p>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
          >
            ثبت تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}
