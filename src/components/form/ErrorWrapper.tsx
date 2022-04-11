type Error = {
    children: string
}

export const ErrorWrapper: React.FC <Partial<Error>> = ({children}) => (
    <div className='error_bounder'>{children}</div>
)
