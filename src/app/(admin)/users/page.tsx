import UsersFilters from "@/components/users/UsersFilters";
import UsersSummary from "@/components/users/UsersSummary";
import UsersTable from "@/components/users/UsersTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <UsersSummary />
      <UsersFilters />
      <UsersTable />
    </div>
  );
}
