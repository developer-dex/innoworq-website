import { HOME } from "../../config/endPoint"
import instance from "../../helpers/axios"


const getHomeList = (data) => {
    return instance.get(`${HOME}?type=${data}`);
}

const HomeService = {
    getHomeList
}

export default HomeService;