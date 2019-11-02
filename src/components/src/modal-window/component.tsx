import React from 'react';

import { Buttons } from '../buttons';
import { Icon } from '../icon';
import { IconType } from '../icon/icon-type';
import { Null } from './null-component';

import { Styled } from './styled';

interface ModalWindowProps {
	isOpen: boolean;
}

export const ModalWindow = (props: ModalWindowProps) => {
	if (!props.isOpen) {
		return <Null />;
	}
	return (
		<Styled.Container>
			<Styled.Header>
				Modal Window
				<Icon type={IconType.ModalWindowCross} />
			</Styled.Header>

			<Styled.Body>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus
				natus tempora laudantium culpa delectus molestias suscipit possimus
				aliquam magnam eveniet quis sit earum assumenda quo odio voluptatibus,
				pariatur qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Id temporibus natus tempora laudantium culpa delectus molestias suscipit
				possimus aliquam magnam eveniet quis sit earum assumenda quo odio
				voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Id temporibus natus tempora laudantium culpa delectus
				molestias suscipit possimus aliquam magnam eveniet quis sit earum
				assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum dolor sit
				amet consectetur adipisicing elit. Id temporibus natus tempora
				laudantium culpa delectus molestias suscipit possimus aliquam magnam
				eveniet quis sit earum assumenda quo odio voluptatibus, pariatur qui.
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus
				natus tempora laudantium culpa delectus molestias suscipit possimus
				aliquam magnam eveniet quis sit earum assumenda quo odio voluptatibus,
				pariatur qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Id temporibus natus tempora laudantium culpa delectus molestias suscipit
				possimus aliquam magnam eveniet quis sit earum assumenda quo odio Lorem,
				ipsum dolor sit amet consectetur adipisicing elit. Id temporibus natus
				tempora laudantium culpa delectus molestias suscipit possimus aliquam
				magnam eveniet quis sit earum assumenda quo odio voluptatibus, pariatur
				qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
				temporibus natus tempora laudantium culpa delectus molestias suscipit
				possimus aliquam magnam eveniet quis sit earum assumenda quo odio
				voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Id temporibus natus tempora laudantium culpa delectus
				molestias suscipit possimus aliquam magnam eveniet quis sit earum
				assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum dolor sit
				amet consectetur adipisicing elit. Id temporibus natus tempora
				laudantium culpa delectus molestias suscipit possimus aliquam magnam
				eveniet quis sit earum assumenda quo odio voluptatibus, pariatur qui.
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus
				natus tempora laudantium culpa delectus molestias suscipit possimus
				aliquam magnam eveniet quis sit earum assumenda quo odio voluptatibus,
				pariatur qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Id temporibus natus tempora laudantium culpa delectus molestias suscipit
				voluptatibus, pariatur qui. Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Id temporibus natus tempora laudantium culpa delectus
				molestias suscipit possimus aliquam magnam eveniet quis sit earum
				assumenda quo odio voluptatibus, pariatur qui. Lorem, ipsum dolor sit
			</Styled.Body>
			<Styled.Footer>
				<Buttons.Primary>Cancel</Buttons.Primary>
			</Styled.Footer>
		</Styled.Container>
	);
};
