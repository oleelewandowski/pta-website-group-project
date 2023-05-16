import AuthForm from "@/components/auth/auth-form";
import React, { Fragment } from "react";
import { getSession } from "next-auth/react";

const LoginPage = () => {
  return (
    <Fragment>
      <AuthForm />
    </Fragment>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default LoginPage;
