import baseURL from "../data/base-url";
import { auth } from "../utils/auth";

const DIVISION_CONFIG_REST_API_URL = "divisions/configurations";

class DivisionConfigService {

    getConfigurations(divisionId) {
        return fetch(baseURL + 'divisions/' + divisionId + '/configurations', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: auth.token(),
                }
            })
            .then(res => res.json());
    }

    addConfiguration(divisionId, typeName, minValue, maxValue) {
        return fetch(baseURL + "divisions/configurations", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                authorization: auth.token(),
            },
            body: JSON.stringify({division: {id: divisionId}, type: {name: typeName}, minValue: minValue, maxValue: maxValue})
        })
    }

    updateConfiguration(id, divisionId, typeName, minValue, maxValue) {
        return fetch(baseURL + DIVISION_CONFIG_REST_API_URL + '/' + id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                authorization: auth.token(),
            },
            body: JSON.stringify({id: id, division: {id: divisionId}, type: {name: typeName}, minValue: minValue, maxValue: maxValue})
        })
    }
}

export default new DivisionConfigService();