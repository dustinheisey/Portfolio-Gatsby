import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Dustin from '../images/dustin-heisey.svg'
import Button from '../components/Button'
import { Info } from '../components/Cards'

const About = props => {
  return (
    <Layout>
      <main className='about padding-lg'>
        <Helmet
          title='Quality Web Design | What Makes Me Different | Dustin Heisey'
          meta={[
            {
              name: 'description',
              content:
                'Most web designers give the bare minimum and charge way too much. I am one of few Dallas Web Designers who create compelling, yet affordable web designs.'
            }
          ]}
        />

        <Info classes='about-blurb display-f direction-r align-c justify-se'>
          <img
            src={Dustin}
            alt='Dustin Heisey'
            className='clip-c width-p-xxmd d-width-p-md d-margin-b-md margin-b-lg'
          />
          <h1 className='text-lg margin-b-sm'>
            Hey, my name is Dustin
          </h1>
          <p className='text-md'>
            I'm a Freelance web and user experience
            designer, located in Dallas, Texas. Your
            problems are my problems, and I have the tools
            and insight to help you solve them, while also
            helping your users solve their own.
          </p>
        </Info>

        <Info classes='about-skills justify-l'>
          <h2 className='text-lg margin-b-md'>My Skills</h2>
          <div className='display-g direction-c align-l margin-b-md about-skills-grid'>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                fill='#12CBC4'
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 24 24'
              >
                <path d='M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.437 9.396c-.439.44-1.031.636-1.621.577l-3.816 2.027 2.028-3.818c-.059-.578.134-1.177.575-1.619.445-.445 1.05-.642 1.649-.572l3.748-1.992-1.99 3.748c.073.632-.151 1.226-.573 1.649zm-1.437-13.396c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm.854-10.021c-.001.46-.374.833-.833.833-.46 0-.834-.373-.834-.833 0-.461.373-.834.834-.833.459 0 .833.374.833.833z' />
              </svg>
              <h3 className='text-md'>
                Responsive Web Design
              </h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                fill='#F79F1F'
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm clip-c'
                viewBox='0 0 24 24'
              >
                <path d='M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z' />
              </svg>
              <h3 className='text-md'>
                User Experience Design
              </h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  fill='#E44D26'
                  d='M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z'
                />
                <path
                  fill='#F16529'
                  d='M64 116.8l36.378-10.086 8.559-95.878h-44.937z'
                />
                <path
                  fill='#EBEBEB'
                  d='M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z'
                />
                <path
                  fill='#fff'
                  d='M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z'
                />
              </svg>
              <h3 className='text-md'>HTML5</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  fill='#1572B6'
                  d='M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z'
                />
                <path
                  fill='#33A9DC'
                  d='M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z'
                />
                <path
                  fill='#fff'
                  d='M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z'
                />
                <path
                  fill='#EBEBEB'
                  d='M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z'
                />
                <path
                  fill='#fff'
                  d='M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z'
                />
                <path
                  fill='#EBEBEB'
                  d='M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z'
                />
              </svg>
              <h3 className='text-md'>CSS3</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  fill='#CB6699'
                  d='M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z'
                />
              </svg>
              <h3 className='text-md'>SASS</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  fill='#F0DB4F'
                  d='M1.408 1.408h125.184v125.185h-125.184z'
                />
                <path
                  fill='#323330'
                  d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'
                />
              </svg>
              <h3 className='text-md'>Javascript</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                fill='#00d8ff'
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z' />
              </svg>
              <h3 className='text-md'>React</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 256 256'
              >
                <path
                  d='M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z'
                  fill='#744C9E'
                  fill-rule='nonzero'
                />
              </svg>
              <h3 className='text-md'>GatsbyJS</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  d='m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087'
                  fill='none'
                />
                <path
                  d='m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z'
                  fill='#35495e'
                />
                <path
                  d='m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z'
                  fill='#41b883'
                />
              </svg>
              <h3 className='text-md'>VueJS</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 128 128'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  fill='#494949'
                  d='M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286-34.652-.618-63.608 27.5-63.617 61.597-.01 35.079 27.612 63.064 62.209 63.014zm-.101-121.594c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719 8.872-.135 17.747-.135 26.618.008 1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58 6.463 19.225 12.793 38.057 19.349 57.56 2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113-25.392-23.566-65.294-15.13-79.997 10.475 5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zM49.274 113.867c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zM40.818 111.789l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zM117.246 67.227c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z'
                />
              </svg>
              <h3 className='text-md'>Wordpress</h3>
            </div>
            <div className='display-f direction-r align-c margin-b-sm'>
              <svg
                fill='#00459c'
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 24 24'
              >
                <path d='M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z' />
              </svg>
              <h3 className='text-md'>
                Progressive Web Apps
              </h3>
            </div>
            <div className='display-f direction-r align-c'>
              <svg
                fill='#05c46b'
                className='width-v-sm t-width-v-xsm margin-r-md d-margin-r-sm margin-b-sm'
                viewBox='0 0 24 24'
              >
                <path d='M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z' />
              </svg>
              <h3 className='text-md'>
                Website Optimization
              </h3>
            </div>
          </div>
        </Info>

        <Info classes='about-intro'>
          <h2 className='text-lg margin-b-sm'>
            What makes me different?
          </h2>
          <p className='text-md'>
            There are many web designers to work on your
            next project with you. Find out how you need to
            work with me if your goal is to make the most
            money below.
          </p>
        </Info>

        <Info classes='about-user'>
          <h2 className='text-lg margin-b-md'>
            My designs are user centric
          </h2>
          <p class='text-md margin-b-lg'>
            When I design websites I take great care in
            intimately understanding your target market. I
            determine your user's goals and design
            experiences that help achieve them with the
            least friction possible. I learn the aesthetic
            preferences of the users and design experiences
            that evoke pleasant feelings while they are
            using your site.
          </p>
          <h3 className='text-xmd margin-b-md'>
            Why this matters
          </h3>
          <p class='text-md'>
            Your users are responsible for your success.
            They are your clients, your customers, your
            donors, your partners. Your success is dependant
            on their reactions. By prioritizing the user's
            needs you are making a significant investment
            into your company, one that if not made will
            have equally significant consequences.
          </p>
        </Info>

        <Info classes='about-business'>
          <h2 className='text-lg margin-b-md'>
            My changes lead to conversions
          </h2>
          <p class='text-md margin-b-lg'>
            You have a goal in mind when we work on a
            project together, and I focus on that goal
            throughout the entire process of designing and
            developing your site. I am also paying attention
            to the user's goals when they come to your
            website, and it is my job to create harmony
            between both. I direct users to the conversion
            we've defined in the most clear, aesthetic, and
            effective way possible, all in efforts to get
            you closer to your goals.
          </p>
          <h3 className='text-xmd margin-b-md'>
            Why this matters
          </h3>
          <p class='text-md'>
            By giving users clear direction as to what they
            are supposed to do when the arrive on your site,
            and by guiding them to this action, they are
            significantly more likely to take the action,
            and they are significantly more likely to enjoy
            doing so.
          </p>
        </Info>

        <Info classes='about-responsive'>
          <h2 className='text-lg margin-b-md'>
            My work looks great everywhere
          </h2>
          <p class='text-md margin-b-lg'>
            A little while ago we lived in a single device
            society, where one individual has one
            technological device, namely a computer. We have
            since migrated to a multiple device society,
            where each individual has multiple devices, and
            even where multiple people share a single
            device, such as in the case of smart tvs. I make
            sure that your website looks beautiful on every
            one of the many devices your users are viewing
            it from. I understand the context of usage on
            each of these devices, and take that into
            account to create experiences that look
            specifically made for each of the devices that
            it is viewed on.
          </p>
          <h3 className='text-xmd margin-b-md'>
            Why this matters
          </h3>
          <p class='text-md'>
            You don't know which device a user will view
            your site on first, and if they get a wrong
            first impression, then you have lost a lead. By
            making your website look great everywhere, users
            from all devices will have every reason to take
            your conversion action.
          </p>
        </Info>

        <Info classes='about-fast'>
          <h2 className='text-lg margin-b-md'>
            My websites are extremely fast
          </h2>
          <p class='text-md margin-b-lg'>
            Speed is an increasingly important issue in
            today's web design. As users begin to demand
            more and more from the websites they use,
            websites have gotten bigger and bigger, and
            slower and slower. I utilize powerful
            technologies to optimize your images, text,
            styling, code, well, everything. This results in
            websites that load almost instantly, a breath of
            fresh air in a internet full of slow
            experiences.
          </p>
          <h3 className='text-xmd margin-b-md'>
            Why this matters
          </h3>
          <p class='text-md'>
            The web is a big place, and users have the
            luxury of being able to go to another website if
            your site isn't fast enough. This is one of the
            most important aspects of usability because a
            sites speed has a direct correlation with a
            positive or negative reaction from the user.
            Having a fast site keeps your users happy long
            enough to get them to contact or buy from you.
          </p>
        </Info>

        <Info name='about-contact display-f direction-c align-c'>
          <h2 className='margin-b-sm'>
            Now let's talk about you
          </h2>
          <p className='margin-b-sm text-md'>
            Now that you've learned about me, I wanna get to
            know you and your project
          </p>
          <Button
            text='Lets get to know each other'
            link='/contact'
            classes='width-v-xmd bg-p-d display-f justify-c'
          />
        </Info>
      </main>
    </Layout>
  )
}

export default About
