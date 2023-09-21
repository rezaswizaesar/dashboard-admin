import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { removeData, setData, updateData } from "../../../Store/Context/Action";
import { AppContext } from "../../../Store/Context/Context";
import CheckinHandler from "./CheckinHandler";
import { Form, Select } from "antd";

interface locationListType {
    id: number
    name: string
}

const Checkin: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const { loadLocation } = CheckinHandler()
    const [locationList, setLocationList] = useState<locationListType[]>([])

    useEffect(() => {
        loadLocation()
    }, [])

    console.log('context => ',)
    useEffect(() => {
        if (state.dataApi) {
            setLocationList(state.dataApi.data)
        }
    }, [state])

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

    console.log('state.dataApi.data => ', state.dataApi.data)
    return (
        <div>
            <div>Checkin</div>
            <Form.Item wrapperCol={{ span: 24 }} label="Type">
                <Select
                    placeholder="Select a name"
                    options={locationList?.map((item) => {
                        return {
                            value: item.name,
                            label: item.name
                        }
                    })
                    } />
            </Form.Item>
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
            <div style={{ marginTop: "1rem", backgroundColor: "#FFF", width: "fit-content", padding: "4px 8px", borderRadius: "4px" }}>
                <Link to="/login">go to login</Link>
            </div>

        </div>
    )
};
export default Checkin;
