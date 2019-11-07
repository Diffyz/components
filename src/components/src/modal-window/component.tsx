import React from 'react';

import { Buttons } from '../buttons';
import { Icon } from '../icon';
import { IconType } from '../icon/icon-type';

import { Styled } from './styled';

interface ModalWindowProps {
	isOpen: boolean;
	handleCancelClick: () => void;
}

export const ModalWindow = (props: ModalWindowProps) => {
	return (
		<>
			<Styled.Container isOpen={props.isOpen}>
				<Styled.Header>
					Modal Window
					<div onClick={props.handleCancelClick}>
						<Icon type={IconType.ModalWindowCross} />
					</div>
				</Styled.Header>
				<Styled.Body>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
					temporibus natus tempora laudantium culpa delectus molestias suscipit
					possimus aliquam magnam eveniet quis sit earum assumenda quo odio
					voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Id temporibus natus tempora laudantium culpa
					delectus molestias suscipit possimus aliquam magnam eveniet quis sit
					earum assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Id temporibus natus
					tempora laudantium culpa delectus molestias suscipit possimus aliquam
					magnam eveniet quis sit earum assumenda quo odio voluptatibus,
					pariatur qui. Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Id temporibus natus tempora laudantium culpa delectus molestias
					suscipit possimus aliquam magnam eveniet quis sit earum assumenda quo
					odio voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Id temporibus natus tempora laudantium
					culpa delectus molestias suscipit possimus aliquam magnam eveniet quis
					sit earum assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Id temporibus natus
					tempora laudantium culpa delectus molestias suscipit possimus aliquam
					magnam eveniet quis sit earum assumenda quo odio Lorem, ipsum dolor
					sit amet consectetur adipisicing elit. Id temporibus natus tempora
					laudantium culpa delectus molestias suscipit possimus aliquam magnam
					eveniet quis sit earum assumenda quo odio voluptatibus, pariatur qui.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
					temporibus natus tempora laudantium culpa delectus molestias suscipit
					possimus aliquam magnam eveniet quis sit earum assumenda quo odio
					voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Id temporibus natus tempora laudantium culpa
					delectus molestias suscipit possimus aliquam magnam eveniet quis sit
					earum assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Id temporibus natus
					tempora laudantium culpa delectus molestias suscipit possimus aliquam
					magnam eveniet quis sit earum assumenda quo odio voluptatibus,
					pariatur qui. Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Id temporibus natus tempora laudantium culpa delectus molestias
					suscipit possimus aliquam magnam eveniet quis sit earum assumenda quo
					odio voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Id temporibus natus tempora laudantium
					culpa delectus molestias suscipit voluptatibus, pariatur qui. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. Id temporibus natus
					tempora laudantium culpa delectus molestias suscipit possimus aliquam
					magnam eveniet quis sit earum assumenda quo odio voluptatibus,
					pariatur qui. Lorem, ipsum dolor sit
				</Styled.Body>
				<Styled.Footer>
					<Buttons.Primary onClick={props.handleCancelClick}>
						Cancel
					</Buttons.Primary>
				</Styled.Footer>
			</Styled.Container>
		</>
	);
};
