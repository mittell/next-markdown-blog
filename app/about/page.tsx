import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Me',
	description: 'Information about me',
};

export default async function AboutPage() {
	return (
		<div className='container max-w-6xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
				<div className='flex-1 space-x-4'>
					<h1 className='inline-block font-black text-4xl lg:text-5xl'>
						About Me
					</h1>
				</div>
			</div>
			<hr className='my-8' />
			<div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
				<div className='min-w-48 max-w-48 flex flex-col gap-2'>
					<Avatar className='h-48 w-48'>
						<AvatarImage src='/avatar.png' alt={siteConfig.author} />
						<AvatarFallback>CM</AvatarFallback>
					</Avatar>
					<h2 className='text-2xl font-bold text-center break-words'>
						{siteConfig.author}
					</h2>
					<p className='text-muted-foreground text-center break-words'>
						Lorem, ipsum.
					</p>
				</div>
				<p className='text-muted-foreground text-lg py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
					praesentium, blanditiis maxime nobis harum unde, laboriosam facere
					amet, ipsa ut ex molestias fugiat veritatis officiis esse tempore
					inventore laborum cumque. Libero facilis asperiores atque fugiat natus
					excepturi ducimus! Nam molestias tempora cumque temporibus illo.
					aliquam assumenda minus corrupti corporis non quibusdam, quae aliquid
					quo dignissimos in recusandae maxime consectetur aperiam reprehenderit
					rerum. Quia nesciunt eaque modi consectetur! Ipsum deleniti mollitia
					molestias consectetur tempore, sed porro expedita repellendus
					assumenda temporibus eaque repudiandae esse alias quidem, hic iure id
					est similique veniam rem repellat. Autem inventore eveniet magni non
					totam molestias dicta!
				</p>
				<p className='text-muted-foreground text-lg py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
					praesentium, blanditiis maxime nobis harum unde, laboriosam facere
					amet, ipsa ut ex molestias fugiat veritatis officiis esse tempore
					inventore laborum cumque. Libero facilis asperiores atque fugiat natus
					excepturi ducimus! Nam molestias tempora cumque temporibus illo.
					aliquam assumenda minus corrupti corporis non quibusdam, quae aliquid
					quo dignissimos in recusandae maxime consectetur aperiam reprehenderit
					rerum. Quia nesciunt eaque modi consectetur! Ipsum deleniti mollitia
					molestias consectetur tempore, sed porro expedita repellendus
					assumenda temporibus eaque repudiandae esse alias quidem, hic iure id
					est similique veniam rem repellat. Autem inventore eveniet magni non
					totam molestias dicta!
				</p>
			</div>
		</div>
	);
}
