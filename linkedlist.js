const LinkedList = (() => {
	let head = null;
	let tail = null;

	const Node = () => {
		return {
			value: null,
			nextNode: null,
		};
	};

	const append = (value) => {
		const node = Node();
		node.value = value;
		if (head === null) {
			head = node;
			tail = node;
		} else {
			tail.nextNode = node;
			tail = node;
		}
	};

	const prepend = (value) => {
		const node = Node();
		node.value = value;
		if (head === null) {
			head = node;
			tail = node;
		} else {
			node.nextNode = head;
			head = node;
		}
	};

	const size = () => {
		let count = 0;
		let currentNode = head;
		while (currentNode != null) {
			count++;
			currentNode = currentNode.nextNode;
		}
		return count;
	};

	const getHead = () => {
		return head;
	};

	const getTail = () => {
		return tail;
	};

	const at = (index) => {
		let count = 0;
		let currentNode = head;
		while (count != index) {
			count++;
			currentNode = currentNode.nextNode;
		}
		return currentNode;
	};

	const pop = () => {
		let currentNode = head;
		while (currentNode.nextNode != tail) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = null;
		tail = currentNode;
	};

	const contains = (value) => {
		let currentNode = head;
		while (currentNode != null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	};

	const find = (value) => {
		let count = 0;
		let currentNode = head;
		while (currentNode != null) {
			if (currentNode.value === value) {
				return count;
			}
			count++;
			currentNode = currentNode.nextNode;
		}
		return null;
	};

	const toString = () => {
		let currentNode = head;
		let string = '';
		while (currentNode != null) {
			string += `(${currentNode.value}) -> `;
			currentNode = currentNode.nextNode;
		}
		string += 'null';
		return string;
	};

	const insertAt = (value, index) => {
		const node = Node();
		node.value = value;
		let count = 0;
		let currentNode = head;
		while (count != index) {
			count++;
			currentNode = currentNode.nextNode;
		}
		node.nextNode = currentNode.nextNode;
		currentNode.nextNode = node;
	};

	const removeAt = (index) => {
		let count = 0;
		let currentNode = head;
		while (count != index) {
			count++;
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = currentNode.nextNode.nextNode;
	};

	return {
		append,
		prepend,
		size,
		getHead,
		getTail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
})();

LinkedList.append("dog");
LinkedList.append("cat");
LinkedList.append("parrot");
LinkedList.append("hamster");
LinkedList.append("snake");
LinkedList.append("turtle");
console.log(LinkedList.toString());
console.log(LinkedList.size());