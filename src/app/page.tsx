import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
		<>
			<MaxWidthWrapper>
				<div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						Your marketplace for high quality{" "}
						<span className='text-blue-600'>digital assests</span>.
					</h1>
					<p className='mt-6 text-lg max-w-prose text-muted-foreground'>
						Welcome to DigitalHippo. Every asset on our platform is verified by
						our team to ensure our highest wuality standards.
					</p>
					<div className='flex flex-col sm:flew-row gap-4 mt-6'>
						<Link href='/products' className={buttonVariants()}>
							Browse Trending
						</Link>
						<Button variant='ghost'> Our quality promise &rarr;</Button>
					</div>
				</div>

				{/* TODO List products */}
			</MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          

        </MaxWidthWrapper>

      </section>
		</>
	);
}
