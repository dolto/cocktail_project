export interface isLogin {
    msg: string,
    id_recipe?:string
}

// export interface isSuccess {
//     isSuccess: string
// }

export interface users_Recipe{
    id_recipe : BigInteger
    kn_name  :string
    en_name  :string
    rcip_img :string
    rcip_taste :string
    rcip_recipe :string
    rcip_garnish :string
    rcip_explanation :string
}