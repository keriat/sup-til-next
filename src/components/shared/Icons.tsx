type IconProps = {
  color?: string
  size?: number
}

export const ReceiverIcon = ({ color, size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.25 11C18.4312 11 18.6063 11.0656 18.7429 11.1848C18.8795 11.3039 18.9684 11.4684 18.993 11.648L19 11.75V12.25C19.0002 13.9536 18.3561 15.5942 17.1971 16.8428C16.0381 18.0914 14.4499 18.8556 12.751 18.982L12.75 21.25C12.7499 21.44 12.6778 21.6229 12.548 21.7618C12.4183 21.9006 12.2407 21.9851 12.0511 21.998C11.8615 22.011 11.6741 21.9515 11.5267 21.8316C11.3793 21.7117 11.2829 21.5402 11.257 21.352L11.25 21.25V18.982C9.59151 18.8588 8.03687 18.1278 6.88421 16.929C5.73155 15.7302 5.06201 14.148 5.004 12.486L5 12.25V11.75C5.00006 11.56 5.07224 11.3771 5.20197 11.2382C5.3317 11.0994 5.5093 11.0149 5.69888 11.002C5.88846 10.989 6.07589 11.0485 6.2233 11.1684C6.37071 11.2883 6.4671 11.4597 6.493 11.648L6.5 11.75V12.25C6.49989 13.6051 7.02372 14.9077 7.96194 15.8854C8.90015 16.8632 10.1801 17.4402 11.534 17.496L11.75 17.5H12.25C13.6051 17.5001 14.9077 16.9763 15.8854 16.0381C16.8632 15.0998 17.4402 13.8199 17.496 12.466L17.5 12.25V11.75C17.5 11.5511 17.579 11.3603 17.7197 11.2197C17.8603 11.079 18.0511 11 18.25 11V11ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2V2Z'
      fill={color || "currentColor"}
    />
  </svg>
)

export const SourceIcon = ({ color, size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.8409 8.84C16.3044 3.71906 7.69341 3.72094 2.15904 8.84C1.95091 9.0325 1.94685 9.35844 2.1481 9.55813L3.2181 10.6197C3.40997 10.8103 3.71872 10.8144 3.9181 10.6316C8.4781 6.45406 15.5212 6.45312 20.0822 10.6316C20.2815 10.8144 20.5903 10.81 20.7822 10.6197L21.8522 9.55813C22.0531 9.35844 22.049 9.0325 21.8409 8.84ZM12 15C10.8953 15 9.99998 15.8953 9.99998 17C9.99998 18.1047 10.8953 19 12 19C13.1047 19 14 18.1047 14 17C14 15.8953 13.1047 15 12 15ZM18.3334 12.3878C14.7315 9.2025 9.26435 9.20594 5.66654 12.3878C5.45091 12.5784 5.44404 12.9094 5.64873 13.1112L6.72498 14.1734C6.91248 14.3584 7.21435 14.3709 7.41404 14.1984C10.0375 11.9306 13.9684 11.9356 16.5856 14.1984C16.7853 14.3709 17.0872 14.3587 17.2747 14.1734L18.3509 13.1112C18.5559 12.9094 18.5487 12.5781 18.3334 12.3878V12.3878Z'
      fill={color || "currentColor"}
    />
  </svg>
)

export const ResizeTopLeftIcon = ({ color, size = 8 }: IconProps) => (
  <svg width={size} height={size} viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.5 1L1 7.5M1.5 1L1 1.5M1 4.5L4.5 1' stroke={color || "currentColor"} strokeLinecap='round' />
  </svg>
)

export const MeshIcon = ({ color, size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4 7.5V10L6 6.4L4 7.5ZM4 7.5L6 8.6M20 7.5L18 6.4L20 10V7.5ZM20 7.5L18 8.6M12 21L14 19.9H10L12 21ZM12 21V18.5M12 12L16 10M12 12V16.5M12 12L8.5 10M6 17.6L4 16.5V14L6 17.6ZM10 4.1L12 3L14 4.1H10ZM20 14V16.5L18 17.62L20 14Z'
      stroke={color || "currentColor"}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const GroupIcon = ({ color, size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='4.5'
      y='4.5'
      width='15'
      height='15'
      stroke={color || "currentColor"}
      strokeLinecap='square'
      strokeDasharray='4 4'
    />
  </svg>
)