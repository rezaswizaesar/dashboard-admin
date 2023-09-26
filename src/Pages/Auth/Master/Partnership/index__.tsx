import { useEffect, useState } from 'react';
import { usePartnershipService } from '../../../../Service/Master/Partnership';

const InputELementData = () => {
    const service = usePartnershipService();
    const [_, setStateValue] = useState<any>([]);

    const onGetData = async () => {
        let response = await service.getPartnership({
            partnershipType: 'OWNERSHIP'
        });
        setStateValue(response);
    };
    useEffect(() => {
        onGetData();
        return () => {};
    }, []);
    return (
        <div>
            {/* {valueState} */}
            <h1>TESTING</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            tempore odio iusto, aspernatur ad dolorem, ea voluptate quam
            deserunt delectus sunt, id commodi quis. Dignissimos vel sequi eius
            dolor inventore.
        </div>
    );
};
export default InputELementData;
