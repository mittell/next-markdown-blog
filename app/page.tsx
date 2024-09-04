import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import { posts } from '#site/content';
import Link from 'next/link';
import { PostItem } from '@/components/post-item';

export default function Home() {
	const latestPosts = sortPosts(posts).slice(0, 5);

	return (
		<>
			<section className='space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32'>
				<div className='container flex flex-col gap-4 text-center'>
					<h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black'>
						Hello, this is a blog!
					</h1>
					<p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
						eligendi magni excepturi repellendus officia architecto, dolorem
						possimus obcaecati molestiae ratione!
					</p>
					<div className='flex flex-col gap-4 justify-center sm:flex-row'>
						<Link
							href='/blog'
							className={cn(buttonVariants({ size: 'lg' }), 'w-fill sm:w-fit')}
						>
							View my blog
						</Link>
						<Link
							href={siteConfig.links.github}
							target='_blank'
							rel='noreferrer'
							className={cn(
								buttonVariants({ variant: 'outline', size: 'lg' }),
								'w-full sm:w-fit'
							)}
						>
							GitHub
						</Link>
					</div>
				</div>
			</section>
			<section className='container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60'>
				<h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center'>
					Latest Posts
				</h2>
				<ul className='flex flex-col'>
					{latestPosts.map((post) => (
						<li key={post.slug} className='first:border-t first:border-border'>
							<PostItem
								slug={post.slug}
								title={post.title}
								description={post.description}
								date={post.date}
								tags={post.tags}
							></PostItem>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
