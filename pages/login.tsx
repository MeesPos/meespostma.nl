import { FormEventHandler, useState } from "react";
import Button from "../components/button";
import AuthLayout from "../layouts/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "../components/input";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: "/dashboard",
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <AuthLayout>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        email: target.value,
                      })
                    }
                  />

                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        password: target.value,
                      })
                    }
                  />

                  {error && (
                    <div className="text-red-500 text-sm mt-2">{error}</div>
                  )}

                  <div>
                    <Button
                      type="submit"
                      title="Sign In"
                      className="w-full justify-center rounded-md border border-transparent"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </AuthLayout>
  );
}
