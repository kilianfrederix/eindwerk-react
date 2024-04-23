import PackedCategory from "./PackedCategory";
import PackedHeader from "./PackedHeader";
import PackedItems from "./PackedItems";

export default function PackedItemsList() {
    return (
        <div>
            <PackedHeader />
            <PackedCategory />
            <PackedItems />
        </div>
    )
}