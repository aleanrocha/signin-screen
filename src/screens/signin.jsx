import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import techInnovation from '../assets/Innovation-rafiki.svg'
import techCompany from '../assets/tech-company-rafiki.svg'

const SignIn = () => {
  return (
    <main className='h-screen text-white flex'>
      <div className='hidden md:flex bg-secondary-foreground w-full h-full p-16 justify-center items-center'>
        <Carousel className='w-full max-w-md'>
          <CarouselContent>
            <CarouselItem>
              <div className='bg-popover-foreground rounded-lg flex aspect-square'>
                <img src={techInnovation} alt='Tech Innovation Rafiki' />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='bg-popover-foreground rounded-lg flex aspect-square'>
                <img src={techCompany} alt='Tech Innovation Rafiki' />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='bg-muted-foreground border-accent' />
          <CarouselNext className='bg-muted-foreground border-accent' />
        </Carousel>
      </div>
      <section className='bg-popover-foreground w-full max-w-3xl h-full p-4 flex justify-center items-center'>
        <Card className='bg-transparent border-primary w-full max-w-md'>
          <CardHeader>
            <CardTitle className='text-2xl text-muted font-bold tracking-tighter'>
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu E-mail e Senha ou o GitHub para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='text-white'>
              <div>
                <Label htmlFor='email'>E-mail</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='exemple@gmail.com'
                  required
                  className='border-muted-foreground mt-1'
                />
              </div>
              <div className='mt-4'>
                <Label htmlFor='pass'>Senha</Label>
                <Input
                  id='pass'
                  type='password'
                  placeholder='Sua senha'
                  required
                  className='border-muted-foreground mt-1'
                />
              </div>
              <Button type='submit' className='my-6 w-full'>
                Entrar
              </Button>
            </form>
            <div className='flex items-center gap-6 text-muted-foreground mt-2'>
              <Separator />
              <span className='text-xs '>OU</span>
              <Separator />
            </div>
            <div className='flex justify-center'>
              <Button type='button' variant='link' className='mt-4 flex'>
                <GitHubLogoIcon className='mr-2' />
                Entrar com o GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className='text-muted-foreground text-center text-sm'>
              Ao entrar em nossa plataforma você concorda com nossos Termos de
              Uso e Política de Privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default SignIn
