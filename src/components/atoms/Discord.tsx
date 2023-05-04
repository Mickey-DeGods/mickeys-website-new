import React, { FC, SVGAttributes } from "react";

export interface DiscordIconProps extends SVGAttributes<SVGSVGElement> {}

export const DiscordIcon: FC<DiscordIconProps> = ({
  ...componentProps
}: DiscordIconProps) => {
  return (
    <svg
      width="24"
      height="19"
      {...componentProps}
      viewBox="0 0 24 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.2415 2.18576C18.7257 1.49024 17.1003 0.977822 15.4007 0.684337C15.3698 0.678672 15.3389 0.692828 15.3229 0.721138C15.1139 1.09295 14.8823 1.578 14.7202 1.95926C12.8922 1.68559 11.0736 1.68559 9.28318 1.95926C9.12099 1.56953 8.88103 1.09295 8.67104 0.721138C8.6551 0.693772 8.62418 0.679617 8.59323 0.684337C6.89465 0.976884 5.26918 1.48931 3.75245 2.18576C3.73932 2.19142 3.72807 2.20086 3.7206 2.21312C0.637438 6.81929 -0.207169 11.3123 0.207167 15.7495C0.209041 15.7712 0.221228 15.792 0.238101 15.8052C2.27228 17.299 4.24273 18.2059 6.17659 18.8071C6.20754 18.8165 6.24034 18.8052 6.26003 18.7797C6.71749 18.155 7.12527 17.4963 7.4749 16.8036C7.49553 16.763 7.47584 16.7149 7.43366 16.6988C6.78686 16.4535 6.17097 16.1543 5.57852 15.8146C5.53166 15.7873 5.52791 15.7202 5.57102 15.6881C5.69569 15.5947 5.8204 15.4975 5.93944 15.3994C5.96098 15.3814 5.99099 15.3777 6.01631 15.389C9.90842 17.166 14.1221 17.166 17.9683 15.389C17.9936 15.3767 18.0236 15.3805 18.0461 15.3984C18.1652 15.4966 18.2898 15.5947 18.4154 15.6881C18.4585 15.7202 18.4557 15.7873 18.4089 15.8146C17.8164 16.1609 17.2005 16.4535 16.5528 16.6979C16.5106 16.714 16.4919 16.763 16.5125 16.8036C16.8696 17.4953 17.2774 18.154 17.7264 18.7788C17.7452 18.8052 17.7789 18.8165 17.8099 18.8071C19.7531 18.2059 21.7235 17.299 23.7577 15.8052C23.7755 15.792 23.7868 15.7721 23.7887 15.7504C24.2845 10.6205 22.9581 6.16438 20.2724 2.21406C20.2659 2.20086 20.2546 2.19142 20.2415 2.18576ZM8.05612 13.0477C6.88433 13.0477 5.91881 11.9719 5.91881 10.6507C5.91881 9.32952 6.86561 8.25373 8.05612 8.25373C9.25598 8.25373 10.2122 9.33897 10.1934 10.6507C10.1934 11.9719 9.2466 13.0477 8.05612 13.0477ZM15.9585 13.0477C14.7867 13.0477 13.8212 11.9719 13.8212 10.6507C13.8212 9.32952 14.768 8.25373 15.9585 8.25373C17.1584 8.25373 18.1145 9.33897 18.0958 10.6507C18.0958 11.9719 17.1584 13.0477 15.9585 13.0477Z" />
    </svg>
  );
};