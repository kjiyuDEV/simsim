'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CONST from '../../asset/config/constant';

const PlaceDetailModal = () => {
    const { modal } = useSelector((state: any) => {
        console.log(state);
        return {
            modal: state.modals.modal,
        };
    });
    const { data } = modal.datas;
    const [type, setType] = useState('');
    useEffect(() => {
        const arr = [];
        data.types.map((v) => {
            if (CONST.CATEGORY_TO_KOR[v]) {
                arr.push((arr.length > 1 ? '/' : '') + CONST.CATEGORY_TO_KOR[v]);
            }
        });
        setType(arr);
    }, []);

    console.log(type);
    return (
        <div className="content-wrap">
            <div className="rate-type">
                <div className="rate">★★★★★</div>
                <div className="type">{type}</div>
            </div>
            <div className="address">{data.formattedAddress}</div>
        </div>
    );
};

export default PlaceDetailModal;
