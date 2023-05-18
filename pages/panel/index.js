import { Fragment } from "react";
import AdminOptions from "@/components/admin-panel/panel/admin-options";
import { getSession } from "next-auth/react";

const AdminPanel = () => {
  return (
    <Fragment>
      <AdminOptions />
    </Fragment>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
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

export default AdminPanel;
