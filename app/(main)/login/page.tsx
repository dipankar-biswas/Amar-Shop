'use client'

import { SimplePage } from "../components/SimplePage";

const LoginPage = () => (
  <SimplePage title="Login">
    <div className="mx-auto max-w-md space-y-3">
      <input placeholder="Email" className="w-full rounded border border-gray-300 px-3 py-2" />
      <input placeholder="Password" type="password" className="w-full rounded border border-gray-300 px-3 py-2" />
      <button className="w-full rounded bg-[#ef553f] py-2 font-semibold text-white">Login</button>
    </div>
  </SimplePage>
);


export default LoginPage;