import type { NextPage } from "next";
import Search from "../components/Search";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableView from "../components/TableView";
import customData from "../constants/customData";
import Layout from "../layouts/Layout";

const Settings: NextPage = () => {
  return (
    <Layout title={"Settings"}>
      <div className="bg-white rounded-md">
        <div className="p-3 py-5 tablet:flex items-center justify-start">
          <Search extentClassName="tablet:min-w-[400px]" />
        </div>
        <TableView
          data={customData}
          renderHeader={() => <TableHeader />}
          renderRow={(item, index) => (
            <TableRow key={item.Title} rowContent={item} />
          )}
        />
      </div>
    </Layout>
  );
};

export default Settings;
