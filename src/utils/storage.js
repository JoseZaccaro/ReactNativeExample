import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
    async get(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // value previously stored
                return value
            }
        } catch (e) {
            // error reading value
        }

    },
    async set(key, value) {
        try {
            const val = await AsyncStorage.setItem(key, value);
            if (val !== null) {
                return val
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }

    },
    async getObject(key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    },
    async setObject(key, value) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // saving error
        }

    },
    async remove(key) {
        try {
            await AsyncStorage.removeItem(key)
            alert('removed')
        } catch (e) {
            // remove error
        }
    },
    async clear(key) {
        try {
            await AsyncStorage.clear()
            alert('cleared')

          } catch(e) {
            // clear error
          }
        
    },
}