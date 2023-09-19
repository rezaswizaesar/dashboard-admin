import { FormEvent, useContext, useRef } from "react";
import { removeData, setData, updateData } from "../../../Store/Context/MyAction";
import { AppContext } from "../../../Store/Context/MyContext";

const Checkin: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);


    const keyRef = useRef<HTMLInputElement>(null);
    const idRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        dispatch(
            setData({
                key: keyRef.current!.value,
                data: [{
                    id: idRef.current!.value,
                    title: titleRef.current!.value
                }]
            })
        );
    };



    const updateHandler = () => {
        dispatch(
            updateData({
                key: "key2",
                data: [{
                    id: 5,
                    title: "xilau xxxx"
                }]
            })
        );
    };

    const deleteHandler = (key: string) => dispatch(removeData(key));

    console.log('state => ', state)
    return <div>
        <div>Checkin</div>
        <form>
            <input type="text" ref={keyRef} />
            <input type="number" ref={idRef} />
            <input type="text" ref={titleRef} />
            <button type="button" onClick={submitHandler}>
                Add
            </button>
        </form>

        <button type="button" onClick={() => deleteHandler("key2")}>
            Delete
        </button>
        <button type="button" onClick={updateHandler}>
            Update
        </button>

    </div>;
};
export default Checkin;
