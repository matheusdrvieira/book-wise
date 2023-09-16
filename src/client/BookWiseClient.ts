import axios from "axios";
import { NextRouter } from "next/router";

export class BookWiseClient {
    router?: NextRouter

    constructor(router?: NextRouter) {
        this.router = router;
    }

    //usado na Home na sessão avaliados recentementes

    async fetchRecentlyReviewedBook() {
        const response = await axios.get(`api/recentlyReviewedBook?userId=${"c296c6c0-5c59-40dd-aa8a-ef2b015b7502"}`)

        return response.data
    }

    //Pagina explorer Modal

    async fetchBookDetails(id: number) {
        const response = await axios.get(`api/booksDetails?itemId=${id}`)

        return response.data
    }

    //usando na pagina Home e na Explorer 

    async fetchPopularBooks() {
        const limit = this.router?.pathname === "/home" ? 4 : Number.MAX_SAFE_INTEGER
        const response = await axios.get(`api/popularBooks?limit=${limit}&search=${""}`)

        return response.data
    }

    //Pagina Profile

    async fetchBooksRatingByUserId() {
        const response = await axios.get(`api/booksRatingByUserId?userId=${"c296c6c0-5c59-40dd-aa8a-ef2b015b7502"}&search=${""}`)

        return response.data
    }

    async fetchInfoProfile() {
        const response = await axios.get(`api/infoProfile?userId=${"c296c6c0-5c59-40dd-aa8a-ef2b015b7502"}`)

        return response.data
    }

    //Componente Menu

    async fetchUserById() {
        const response = await axios.get(`api/user?userId=${"c296c6c0-5c59-40dd-aa8a-ef2b015b7502"}`)

        return response.data
    }
}