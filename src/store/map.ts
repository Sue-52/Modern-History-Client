import { getWarData } from "@/api/map";

export interface MapDataProps {
  allWarData: AllWarDataI[];
}

interface AllWarDataI {
  id: number;
  warName: string;
  startTime: string;
  warfareCenter: WarfareCenterI[];
}

interface WarfareCenterI {
  lat: number;
  lon: number;
  place: string;
}

const map = {
  namespaced: true,
  state(): MapDataProps {
    return {
      allWarData: [],
    };
  },
  mutations: {
    GetWarData(state, payload) {
      // console.log(payload);
      getWarData(payload).then((res) => {
        state.allWarData = res.data;
        console.log(state.allWarData);
      });
    },
  },
  actions: {
    handleGetWarData: (store, payload) => {
      // console.log(payload);
      getWarData(payload).then((res) => {
        store.commit("GetWarData", res.data);
      });
    },
  },
};

export default map;
