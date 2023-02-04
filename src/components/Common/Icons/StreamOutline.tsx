import type { SVGProps } from 'react'
import React from 'react'

const StreamOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.46689 0.392074C4.75949 0.685259 4.75902 1.16013 4.46583 1.45273C2.78722 3.128 1.75 5.44218 1.75 8.00003C1.75 10.5878 2.81163 12.9262 4.52503 14.6059C4.82082 14.8959 4.82554 15.3707 4.53557 15.6665C4.24561 15.9623 3.77076 15.967 3.47497 15.677C1.48564 13.7269 0.25 11.0071 0.25 8.00003C0.25 5.02783 1.45721 2.33616 3.40623 0.391016C3.69941 0.0984154 4.17429 0.0988888 4.46689 0.392074ZM17.6164 0.464458C17.9122 0.17449 18.387 0.17921 18.677 0.474999C20.5771 2.41326 21.75 5.07043 21.75 8.00003C21.75 10.9645 20.5491 13.6499 18.609 15.5938C18.3164 15.887 17.8415 15.8875 17.5484 15.5949C17.2552 15.3023 17.2547 14.8274 17.5473 14.5342C19.2182 12.86 20.25 10.5512 20.25 8.00003C20.25 5.47873 19.2422 3.1943 17.6059 1.52507C17.3159 1.22928 17.3206 0.754426 17.6164 0.464458ZM7.30923 3.48757C7.59226 3.79001 7.57652 4.26462 7.27408 4.54765C6.32517 5.43564 5.75 6.65024 5.75 7.98223C5.75 9.32972 6.33869 10.5573 7.30756 11.4479C7.61251 11.7282 7.63248 12.2026 7.35216 12.5076C7.07185 12.8125 6.59739 12.8325 6.29244 12.5522C5.03967 11.4006 4.25 9.7824 4.25 7.98223C4.25 6.20299 5.02148 4.60128 6.24916 3.45242C6.5516 3.16939 7.02621 3.18513 7.30923 3.48757ZM14.7429 3.52559C15.0292 3.22626 15.5039 3.21571 15.8033 3.50202C17.0005 4.64714 17.75 6.22858 17.75 7.98223C17.75 9.75681 16.9825 11.3548 15.7604 12.503C15.4586 12.7867 14.9839 12.7719 14.7003 12.47C14.4167 12.1681 14.4315 11.6935 14.7333 11.4099C15.6778 10.5225 16.25 9.31077 16.25 7.98223C16.25 6.66918 15.6911 5.47046 14.7664 4.58599C14.4671 4.29968 14.4566 3.82492 14.7429 3.52559ZM11.5922 4.88834C11.6098 4.89796 11.6274 4.9076 11.645 4.91724C11.8855 5.04887 12.124 5.18627 12.3391 5.32225C12.5841 5.4771 12.8445 5.65888 13.1002 5.8466C13.1155 5.85784 13.1308 5.86905 13.146 5.88024C13.5543 6.17985 13.9365 6.46032 14.2067 6.74359C14.5201 7.07207 14.75 7.47092 14.75 8.00006C14.75 8.52919 14.5201 8.92805 14.2067 9.25652C13.9365 9.53979 13.5543 9.82026 13.146 10.1199C13.1308 10.1311 13.1155 10.1423 13.1002 10.1535C12.8445 10.3412 12.5841 10.523 12.3391 10.6779C12.124 10.8138 11.8855 10.9512 11.645 11.0829C11.6274 11.0925 11.6098 11.1022 11.5922 11.1118C11.1916 11.3312 10.8024 11.5444 10.4602 11.655C10.0513 11.7872 9.57827 11.8163 9.12382 11.5093C8.69566 11.2201 8.52038 10.7919 8.4325 10.3837C8.35233 10.0113 8.32201 9.53875 8.28853 9.01669C8.28742 8.99944 8.28631 8.98213 8.28519 8.96476C8.26397 8.63453 8.25 8.30316 8.25 8.00006C8.25 7.69696 8.26397 7.36559 8.28519 7.03535C8.28631 7.01799 8.28742 7.00068 8.28853 6.98342C8.32201 6.46137 8.35233 5.98878 8.4325 5.61641C8.52038 5.20825 8.69566 4.78006 9.12382 4.49079C9.57827 4.18376 10.0513 4.21293 10.4602 4.34513C10.8024 4.45576 11.1916 4.66893 11.5922 4.88834ZM9.95103 5.75853C9.9379 5.78721 9.91871 5.84009 9.89889 5.93214C9.8451 6.18197 9.82008 6.54055 9.78211 7.13154C9.76213 7.44248 9.75 7.73967 9.75 8.00006C9.75 8.26045 9.76213 8.55764 9.78211 8.86858C9.82008 9.45956 9.8451 9.81815 9.89889 10.068C9.91871 10.16 9.9379 10.2129 9.95102 10.2416C9.96387 10.2384 9.97968 10.2339 9.99874 10.2277C10.1886 10.1663 10.4504 10.0267 10.9249 9.76705C11.148 9.64492 11.3575 9.52381 11.5377 9.40987C11.7435 9.27985 11.9736 9.11978 12.2125 8.94439C12.6829 8.59905 12.9539 8.39664 13.1214 8.22106C13.2506 8.0857 13.2503 8.0372 13.25 8.0041C13.25 8.00273 13.25 8.00138 13.25 8.00006C13.25 7.99873 13.25 7.99739 13.25 7.99602C13.2503 7.96291 13.2506 7.91441 13.1214 7.77906C12.9539 7.60347 12.6829 7.40107 12.2125 7.05572C11.9736 6.88034 11.7435 6.72026 11.5377 6.59025C11.3575 6.4763 11.148 6.35519 10.9249 6.23306C10.4504 5.97337 10.1886 5.83376 9.99875 5.77238C9.97968 5.76622 9.96388 5.76176 9.95103 5.75853Z"
      fill="currentColor"
    />
  </svg>
)

export default StreamOutline
