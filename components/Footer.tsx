import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between
    body-text w-full gap-y-10 border-t border-black-400
    bg-black-100 px-20 py-12 mx-md:flex-col">
        <p>Copyright © 2024 Ansuz Net | todos los derechos reservados</p>

        <div className="flex gap-x-9">
            <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
            <Link href="/politica-de-privacidad">Políticas de privacidad</Link>
        </div>
    </footer>
  )
}

export default Footer
