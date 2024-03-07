export default function ReviewDetail({params,} :{
    params:{
        productId: string;
        reviewId: string;
    }
}) {
    return(
        <h1>Review {params.reviewId} for product {params.productId}</h1> //something wrong, product working but review not working in params.....
    )                                                                    //vrodebi tutorial bn bit xil qilindiiiiiiiiiiiii
} 
