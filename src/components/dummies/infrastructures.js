import React from 'react';
import {v4} from 'uuid';
import {GrMapLocation} from 'react-icons/gr';
import {RiBuildingLine} from 'react-icons/ri';
import {FaRegAddressCard} from 'react-icons/fa';
import {RiUserSearchLine} from 'react-icons/ri';
import {MdDesktopMac} from 'react-icons/md';
import {IoIosPeople} from 'react-icons/io';


const infrastructures = [
    {
        id: v4(),
        icon: <GrMapLocation />,
        value: '10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: v4(),
        icon: <RiBuildingLine />,
        value: '2000',
        description: 'Proin vestibulum mauris sed sapien pretium,'
    },
    {
        id: v4(),
        icon: <FaRegAddressCard />,
        value: '300,270',
        description: 'sit amet pulvinar augue efficitur. In hac habitasse platea dictumst.'
    },
    {
        id: v4(),
        icon: <RiUserSearchLine />,
        value: '30+',
        description: 'Mauris mattis tincidunt mauris, ut viverra nunc molestie quis.'
    },
    {
        id: v4(),
        icon: <MdDesktopMac />,
        value: '40,360',
        description: 'Nullam ullamcorper neque semper erat imperdiet, et viverra nibh finibus.'
    },
    {
        id: v4(),
        icon: <IoIosPeople />,
        value: '50,240',
        description: 'Curabitur fermentum eleifend justo vel ultrices. Sed massa ex.'
    },
]

export default infrastructures;