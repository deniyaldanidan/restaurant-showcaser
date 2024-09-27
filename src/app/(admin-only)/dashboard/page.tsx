import FoodCategoryTable from "@/components/Dashboard/FoodCategoryTable";
import FoodCatForm from "@/components/Dashboard/FoodCatForm";
import FoodForm from "@/components/Dashboard/FoodForm";
import FoodTable from "@/components/Dashboard/FoodTable";
import { IoMdAdd as AddIcon } from "react-icons/io";

export default function DashBoardPage() {
  return (
    <>
      {/* Food Categories List */}
      <section className="mb-12 border-b border-b-border py-12">
        <div className="flex items-center gap-x-6 mb-1">
          <h2 className="text-xl font-semibold text-high-fg mobile:text-lg">
            Food Categories
          </h2>
          <FoodCatForm
            action="add"
            className="btn btn-sm btn-flex btn-primary mobile:btn-xs"
          />
        </div>
        <FoodCategoryTable />
      </section>
      {/* Foods List */}
      <section>
        <div className="flex items-center gap-x-6 mb-1">
          <h2 className="text-xl font-semibold text-high-fg">Foods</h2>
          <FoodForm className="btn btn-sm btn-flex btn-primary" action="add">
            <AddIcon />
            <span>Add</span>
          </FoodForm>
        </div>
        <FoodTable />
      </section>
    </>
  );
}
