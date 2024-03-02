"""Implement a Python class for a Queue data structure with methods for enqueue, dequeue, and checking if the queue is empty."""

class Queue:
    """
    Implementation of a Queue data structure.
    
    Attributes:
        queue (list): The list used to store elements in the queue.
    """

    def __init__(self):
        """
        Initialize an empty queue.
        """
        self.queue = []

    def enqueue(self, item):
        """
        Add an item to the end of the queue.
        
        Args:
            item: The item to be added to the queue.
        """
        self.queue.append(item)

    def dequeue(self):
        """
        Remove and return the item from the front of the queue.
        
        Returns:
            The item removed from the front of the queue.

        Raises:
            IndexError: If the queue is empty.
        """
        if not self.is_empty():
            return self.queue.pop(0)
        else:
            print("Queue is empty.")
            return None

    def is_empty(self):
        """
        Check if the queue is empty.

        Returns:
            True if the queue is empty, False otherwise.
        """
        return len(self.queue) == 0



if __name__ == "__main__":
    queue = Queue()
    print("Is the queue empty?", queue.is_empty())

    queue.enqueue(10)
    queue.enqueue(15)
    queue.enqueue(25)

    print("Is the queue empty?", queue.is_empty())
    print("Dequeuing:", queue.dequeue())
    print("Dequeuing:", queue.dequeue())
    print("Dequeuing:", queue.dequeue())
    print("Dequeuing:", queue.dequeue())
    print("Is the queue empty?", queue.is_empty())
