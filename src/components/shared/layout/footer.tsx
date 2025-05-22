import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { gradientTextClasses } from '../../../style/style';
import { useI18n } from '../i18nContext';

export const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className={`text-xl font-bold mb-4 ${gradientTextClasses}`}>
              Nestor Lenaerts
            </h3>
            <p className='text-indigo-200 mb-4'>{t('footer.tagline')}</p>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/Lenaerts-Nestor'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-indigo-200 transition-colors'
              >
                <span className='sr-only'>GitHub</span>
                <Github className='h-6 w-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/nestor-lenaerts/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-indigo-200 transition-colors'
              >
                <span className='sr-only'>LinkedIn</span>
                <Linkedin className='h-6 w-6' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>{t('footer.quickLinks')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-indigo-200 hover:text-white transition-colors'
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link
                  to='/About'
                  className='text-indigo-200 hover:text-white transition-colors'
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link
                  to='/Blog'
                  className='text-indigo-200 hover:text-white transition-colors'
                >
                  {t('navigation.blog')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>{t('footer.contact')}</h3>
            <p className='text-indigo-200 mb-2 flex items-center'>
              <Mail className='h-5 w-5 mr-2' />
              <a
                href='mailto:contact@example.com'
                className='hover:text-white transition-colors'
              >
                contact@example.com
              </a>
            </p>
            <p className='text-indigo-200 flex items-center'>
              <MapPin className='h-5 w-5 mr-2' />
              {t('footer.location')}
            </p>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300'>
          <p>
            &copy; {currentYear} Nestor Lenaerts. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
