import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/slices/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/slices/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-500 text-white px-4 py-3 ">
      <div className="text-3xl">REACT/REDUX UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 bg-white text-black rounded-lg px-2"
            name=""
            id=""
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>

        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 bg-white text-black rounded-lg px-4"
            type="text"
            placeholder="Arama yapınız..."
          />
        </div>

        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
