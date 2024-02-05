import axios from "axios"

export const getUserData = async () => {
    // getUserData 함수 정의 - 비동기로 데이터를 가져오는 역할
    try {
        // axios를 사용하여 '/data.json' 엔드포인트에서 데이터를 가져오기
        const response = await axios.get('http://localhost:3001/users');

        // 가져온 데이터를 콘솔에 출력 console.log("user get data", response); 가져온 데이터를 반환
        return response;
    } catch (error) {

        // 에러가 발생한 경우 콘솔에 에러 메시지 출력
        console.error("Error fetching user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 함
        throw error;
    }
}

export const updateUserData = async (data, method = 'post') => {
    try {
        let response;

        // Depending on the method, send a POST or PUT request
        if (method.toLowerCase() === 'post') {
            response = await axios.post('http://localhost:3001/users', data);
            // } else if (method.toLowerCase() === 'put') {     response = await
            // axios.put('http://localhost:3001/users', data);
        } else {
            throw new Error('Invalid method. Use "post" or "put".');
        }

        // Log the successful update and return the response console.log('Data updated
        // successfully:', response.data);
        return response;
    } catch (error) {
        // Log the error and throw it again for the caller to handle
        console.error('Error updating user data:', error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/users/${id}`);
        return response;
    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
};