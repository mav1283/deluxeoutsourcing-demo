import React from "react";
import {
  TiMessages,
  AiOutlineFileSearch,
  FaNetworkWired,
} from "react-icons/all";

import { v4 } from "uuid";

const hiwsteps = [
  {
    id: 1,
    name: "Lorem",
    description: "Donec pellentesque.",
    icon: <TiMessages />,
    items: [
      {
        itemId: v4(),
        itemName: "Consectetur",
      },
      {
        itemId: v4(),
        itemName: "Adipiscing",
      },
      {
        itemId: v4(),
        itemName: "Morbised",
      },
    ],
  },
  {
    id: 2,
    name: "Ipsum",
    description: "Eu nibh vitae ornare.",
    icon: <AiOutlineFileSearch />,
    items: [
      {
        itemId: v4(),
        itemName: "Laoreet",
      },
      {
        itemId: v4(),
        itemName: "Cras Auctor",
      },
      {
        itemId: v4(),
        itemName: "tincidunt Dictum",
      },
    ],
  },
  {
    id: 3,
    name: "Dolor",
    description: "Fusce in pretium justo",
    icon: <FaNetworkWired />,
    items: [
      {
        itemId: v4(),
        itemName: "Nam in Tortor",
      },
      {
        itemId: v4(),
        itemName: "Suscipit Felis",
      },
      {
        itemId: v4(),
        itemName: "Pellentesque ullamcorper",
      },
    ],
  },
];

export default hiwsteps;
