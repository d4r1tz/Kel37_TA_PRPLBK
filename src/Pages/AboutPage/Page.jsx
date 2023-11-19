import React from "react"
import ProfileComponent from "./ProfileComponent"

export default function AboutPage() {
    return (
        <div>
            <h1>Profil Kelompok 37 PRPLBK</h1>
            <div style={{display:"flex", alignItems:"flex-start"}}>
                <ProfileComponent photo="https://siap.undip.ac.id/foto/ktm/2020/21120120120021-58373161-6987-463f-8dc1-a1980e73ccad.jpg" name="Daniel Ritz" nim="21120120120021"/>
                <div style={{paddingLeft:"40px",paddingRight:"40px"}} />
                <ProfileComponent photo="https://scontent.fsrg2-1.fna.fbcdn.net/v/t39.30808-6/403973960_2036181980076939_7890292130331147743_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFGjvj-Rh_CIzrF4hrmwjO3w6jTN2xP6PzDqNM3bE_o_ERYUXhQx76MpL-FFq1UAh7DNQqoKTSJXaKDvYZIheC5&_nc_ohc=mX7_0PN8_OIAX_BNjaP&_nc_ht=scontent.fsrg2-1.fna&oh=00_AfA7trOUlmKTfH3d1LYsgDepXeq8G6jPxns0gm6mOlW-CA&oe=655F2A8F" name="Fatih Rizqy Hakim" nim="21120120140170"/>
                <div style={{paddingLeft:"40px",paddingRight:"40px"}} />
                <ProfileComponent photo="https://scontent.fsrg2-1.fna.fbcdn.net/v/t39.30808-6/403973995_2036181990076938_6493852096991280580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBPL35XFDNyDFtSSKxR_FU3nVO-p8KEYnedU76nwoRieXvmCZqeLE4DVhjzVOd6Bt2JYJsWH_dFTO-9RDvSU09&_nc_ohc=CJ0Jua8Tv18AX9VBanA&_nc_ht=scontent.fsrg2-1.fna&oh=00_AfC8OswImDB_c3iiQxGejThtpPd2Ci_rGCa4zKj3FyAScA&oe=655F4A17" name="Raung Kawijayan" nim="21120120140155"/>
                <div style={{paddingLeft:"40px",paddingRight:"40px"}} />
                <ProfileComponent photo="" name="Adam Abdur Rozaq" nim="21120119130076"/>
            </div>
        </div>
    )
}