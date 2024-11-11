import { AxiosCustom } from '../axiosCustom'

export async function getTopNews() {
  try {
    const data = await AxiosCustom.get('/everything?q=apple&from=2024-11-10&to=2024-11-10&sortBy=popularity&apiKey=6b1b7b6643db4abbafe92da267fcf8fc&pageSize=8')
    return data.data;
  } catch (error) {

  }
}