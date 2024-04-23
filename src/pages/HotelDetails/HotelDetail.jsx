import React from 'react';
import HotelImage from './hotelImage';
import { Typography } from '@material-tailwind/react';
import KaKaoMap from '../HotelInquiry/KaKaoMap';
import DateSelector from '../../components/Calendar/DateSelector';
import PeopleSelector from '../../components/PeopleSelector/PeopleSelector';
import RoomCard from './roomcard';

const HotelDetail = () => {
    const roomData = [
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
    ]

    return (
        <div className='max-w-8xl'>
            <div className='bg-blue-50'>
            <HotelImage />
            </div>
            <Typography variant="h6" color="black" className="mb-4 uppercase">Black.5성급.호텔</Typography>
            <Typography variant="h3" color="black" className="mb-4 uppercase">히든 클리프 호텔&네이쳐</Typography>
            <Typography variant="h5" color="black" className="mb-4 uppercase">서비스 및 부대시설</Typography>
            <Typography variant="h6" color="black" className="mb-4 uppercase">🛁욕실 🚽화장실 🚿샤워실 🛏침대 ♨스파 </Typography>
            <Typography variant='h4' color='balck' className="mb-4 uppercase">숙소 소개</Typography>
            <Typography variant='h6' color='balck'>
            "전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와 품격을 한층 높여 주는 프리미엄 라이프스타일 공간으로 변화를 거듭해 오는 세계 최고의 럭셔리 호텔입니다"
            </Typography>

            <div className='flex justify-between items-center mb-4 float-right'>
                <div className="flex flex-col">
                    <div className="flex flex-colrounded-xl overflow-hidden ml-4">
                        <KaKaoMap />
                    </div>
                    <DateSelector />
                    <PeopleSelector />
                </div>
            </div>
            
            <div className="w-2/4 flex flex-col items-baseline mb-8">
                {roomData.map((room) => (
                    <RoomCard
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        description={room.description}
                        imageUrl={room.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default HotelDetail;
