import { Separator } from '@/components/ui/separator'

function Links() {
    return (
        <div className='mt-10 flex h-5 items-center space-x-4 text-sm justify-center'>
            <div>
                <a
                    href="mailto:migara1225@gmail.com"
                    className="text-sm underline-offset-4 hover:underline"
                >
                    Email
                </a>
            </div>
            <Separator orientation="vertical" />
            <div>
                <a
                    href="https://www.linkedin.com/in/migarak/"
                    className="text-sm underline-offset-4 hover:underline"
                    target='_blank'
                >
                    LinkedIn
                </a>
            </div>
            <Separator orientation="vertical" />
            <div>
                <a
                    href="https://github.com/mi-tec"
                    className="text-sm underline-offset-4 hover:underline"
                    target='_blank'
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default Links